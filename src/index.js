let rooms = JSON.parse(localStorage.getItem("rooms"));

const roombox = document.querySelector("#roombox");
const roomname = document.querySelector("#roomname");
const addBtn = document.querySelector("#Addbtn");
const stdNum = document.querySelector("#stdNum");

rooms.forEach((t) => {});

function renderRooms(arr = []) {
  roombox.innerHTML = "";
  arr.forEach((r) => {
    roombox.innerHTML += `
                             <div class=" p-4 bg-[#f5f5f5]">
              <div class="flex  items-center justify-between">
                <p>${r.title}</p>
                <button onclick="editRoom(${r.id})">
                  <i class="fa-solid fa-edit"></i>
                </button>
              </div>
              <p>${r.std_numbers} ta oq'uvchi uchin</p>

            </div>
        `;
  });
}
renderRooms(rooms);

const editRoomInp1 = document.querySelector("#editRoomInp1");
const editRoomInp2 = document.querySelector("#editRoomInp2");

let editingRoomId = null;

function editRoom(id) {
  console.log(id);

  editingRoomId = id;
  const findedRoom = rooms.find((r) => r.id == id);

  editRoomInp1.value = findedRoom.title;
  editRoomInp2.value = findedRoom.std_numbers;
}

const roomsearch = document.querySelector("#roomSearch");
function searchRoom() {
  const text = roomsearch.value;
  const filtered = rooms.filter((r) => {
    const t = r.title.toLowerCase();
    const s = text.toLowerCase();

    return t.includes(s);
  });
  renderRooms(filtered);
}

function addRoom() {
  const obj = {
    id: new Date().getTime(),
    title: roomname.value,
    std_numbers: stdNum.value,
  };

  rooms.push(obj);
  renderRooms(rooms);

  localStorage.setItem("rooms", JSON.stringify(rooms));
}

function deleteRoom() {
  rooms = rooms.filter((r) => r.id != editingRoomId);

  renderRooms(rooms);
  localStorage.setItem("rooms", JSON.stringify(rooms));
}

function editRoomFunc() {
  const findedRoom = rooms.find((r) => r.id == editingRoomId);
  const findedRoomIdx = rooms.findIndex((r) => r.id == editingRoomId);

  findedRoom.title = editRoomInp1.value;
  findedRoom.std_numbers = editRoomInp2.value;

  rooms[findedRoomIdx] = findedRoom;

  renderRooms(rooms);
  localStorage.setItem("rooms", JSON.stringify(rooms));
}
