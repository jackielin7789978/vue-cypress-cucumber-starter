<template>
  <header>
    <nav>
      <RouterLink data-test-id="home" to="/">Home</RouterLink>
      <RouterLink data-test-id="login" to="/login">Login</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
