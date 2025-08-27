const { UserService } =require( "../services/index.js");

async function register(req, res) {
  try {
    const { user, token } = await UserService.register(req.body);
    return res.status(201).json({ user, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const { user, token } = await UserService.login(req.body);
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function getUser(req, res) {
  try {
    const user = await UserService.getUser(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports= {
  register,
  login,
  getUser,
  getAllUsers
};
