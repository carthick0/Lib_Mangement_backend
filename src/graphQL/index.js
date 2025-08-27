const { ApolloServer, AuthenticationError, ForbiddenError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");
const typeDefs=require("./typeDefs");
const resolvers=require('./resolvers')
function requireRole(user, requiredRole) {
  if (!user) throw new AuthenticationError("Not authenticated");
  if (user.role.toLowerCase() !== requiredRole.toLowerCase())
    throw new ForbiddenError(`Only ${requiredRole}s can perform this action`);
}

async function initGraphQL(app) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {      
      const authHeader = req.headers.authorization || "";
      const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
      if (!token) return { user: null, requireRole };

      try {
        const payload = jwt.verify(token, JWT_SECRET);
        const user = { id: payload.id, role: payload.role };
        return { user, requireRole };   
      } catch (err) {
        console.log("JWT Error:", err.message);
        return { user: null, requireRole };
      }
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
}

module.exports = initGraphQL;
