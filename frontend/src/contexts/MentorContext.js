import React, { createContext, useContext, useState } from 'react';

const MentorContext = createContext();

export const MentorProvider = ({ children }) => {
  const [mentorEmail, setUserEmail] = useState('');

  const setUser = (email) => {
    setUserEmail(email);
  };

  return (
    <MentorContext.Provider value={{ mentorEmail, setUser }}>
      {children}
    </MentorContext.Provider>
  );
};

export const useMentor = () => {
  return useContext(MentorContext);
};
