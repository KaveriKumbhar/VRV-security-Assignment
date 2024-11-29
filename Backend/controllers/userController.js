export const getProfile = (req, res) => {
    res.status(200).json({
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      role: req.user.role,
    });
  };
  