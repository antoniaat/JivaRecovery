const userService = {
  register: async (data) => {
    const res = await fetch('http://localhost:8080/api/user/register', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (res.status === 422) {
      const parsedRes = await res.json();

      if (parsedRes.msg.includes('email')) {
        throw new Error('Email is already taken');
      } else {
        throw new Error('Username is already taken');
      }
    }

    return res.json();
  },
  login: async (data) => {
    const res = await fetch('http://localhost:8080/api/user/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (res.status === 401) {
      throw new Error('Unauthorized');
    }

    return res.json();
  },
  logout: async () => {
    const res = await fetch('http://localhost:8080/api/user/logout', {
      headers: {
        'Content-Type': 'applicataion/json'
      },
      method: 'POST',
      credentials: 'include'
    });

    return res.json();
  },
  auth: async () => {
    const res = await fetch('http://localhost:8080/api/user/auth', {
      headers: {
        'Content-Type': 'applicataion/json'
      },
      method: 'GET',
      credentials: 'include'
    });

    if (res.status === 401) {
      throw new Error('Unauthorized!');
    }

    return res.json();
  }
};

export default userService;