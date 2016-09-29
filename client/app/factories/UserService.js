'use strict'

app.factory('UserService', ['$http', '$location', function($http, $location) {
  let userState = null
   ,    userObj = null

  const register = (newUserObject) => {
    $http.post('/api/register', newUserObject)
      .then(() => $location.url('/login'))
      .catch(console.error)
  }

  const login = (userObj) => {
    $http.post('/api/login', userObj)
      .then(data => {
        console.log('data:', data)
        userState = true
        userObj = data
        $location.url('/home')
      })
      .catch(console.error)
  }

  const logout = () => {
    $http.post('/api/logout')
      .then(data => {
        userState = false
        userObj = data
        $location.url('/')
      })
      .catch(console.error)
  }

  const postProfile = (profile) => {
    $http.post("/api/profiles", profile)
      .then(() => {
        $location.url("/profiles");
      })
      .catch(console.error);
  }

  const getUserState = () => {
    return userState
  }
  const getUserObj = () => {
    return userObj
  }

  return {getUserState, getUserObj, postProfile, register, login, logout}
}])
