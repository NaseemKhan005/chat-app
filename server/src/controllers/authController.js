export const signUp = async (req, res, next) => {
  try {
    res.send("Sign up route");
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    res.send("Sign in route");
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.send("Logout route");
  } catch (error) {
    next(error);
  }
};
