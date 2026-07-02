import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  registeredUsers: JSON.parse(localStorage.getItem("registeredUsers")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "REGISTER": {
      const newUser = action.payload;
      // Check if user already exists
      const userExists = state.registeredUsers.some(
        (u) => u.email.toLowerCase() === newUser.email.toLowerCase()
      );
      if (userExists) {
        return state;
      }
      const updatedUsers = [...state.registeredUsers, newUser];
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
      return {
        ...state,
        registeredUsers: updatedUsers,
      };
    }
    case "LOGIN": {
      const { email, password } = action.payload;
      
      // Handle demo roles
      if (email === "guest@bbl.com" && password === "GuestPass123!") {
        const guestUser = { username: "Guest", email, role: "guest" };
        localStorage.setItem("currentUser", JSON.stringify(guestUser));
        return { ...state, currentUser: guestUser };
      }
      if (email === "player@bbl.com" && password === "PlayerPass123!") {
        const playerUser = { username: "Player", email, role: "player" };
        localStorage.setItem("currentUser", JSON.stringify(playerUser));
        return { ...state, currentUser: playerUser };
      }
      if (email === "admin@bbl.com" && password === "AdminPass123!") {
        const adminUser = { username: "Admin", email, role: "admin" };
        localStorage.setItem("currentUser", JSON.stringify(adminUser));
        return { ...state, currentUser: adminUser };
      }

      // Check registered users
      const foundUser = state.registeredUsers.find(
        (u) =>
          u.email.toLowerCase() === email.toLowerCase() &&
          u.password === password
      );

      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        return { ...state, currentUser: foundUser };
      }
      return state;
    }
    case "LOGOUT": {
      localStorage.removeItem("currentUser");
      return { ...state, currentUser: null };
    }
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = (username, email, password) => {
    dispatch({ type: "REGISTER", payload: { username, email, password } });
  };

  const login = (email, password) => {
    // Return true if logged in successfully
    const { registeredUsers } = state;
    
    // Check demo accounts
    if (
      (email === "guest@bbl.com" && password === "GuestPass123!") ||
      (email === "player@bbl.com" && password === "PlayerPass123!") ||
      (email === "admin@bbl.com" && password === "AdminPass123!")
    ) {
      dispatch({ type: "LOGIN", payload: { email, password } });
      return true;
    }

    const user = registeredUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (user) {
      dispatch({ type: "LOGIN", payload: { email, password } });
      return true;
    }

    return false;
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        registeredUsers: state.registeredUsers,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
