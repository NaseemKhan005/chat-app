export const signUp = async (req, res) => {
  try {
    res.send("Sign up route");
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (req, res) => {
  try {
    res.send("Sign in route");
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    res.send("Logout route");
  } catch (error) {
    console.log(error);
  }
};
