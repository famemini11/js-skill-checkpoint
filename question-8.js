// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function getUserList() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  const newUser = data.map(user => user.name);
  console.log(newUser);
}
getUserList();