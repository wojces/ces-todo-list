<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Ces's TODOList</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/aktywne">Aktywne Zadania</router-link>
        </li>
        <li>
          <router-link to="/zrealizowane">Zrealizowane Zadania</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  background-color: rgb(175, 175, 175);
  display: flex;
  justify-content: center;
  align-items: center;
}
header a {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid black transparent;
  border-radius: 5px;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid rgb(81, 81, 81);
}

h1 {
  margin: 0;
}

h1 a {
  color: black;
  margin: 0;
}

h1 a:active,
h1 a:hover,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 8px;
  font-weight: 700;
}
</style>