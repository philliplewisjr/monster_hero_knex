const {bookshelf} = require("./bookshelf.js")

const Battle = require("./models/battles")
const Monster = require("./models/monsters.js")

const monster = new Monster();
monster.set("monster_name", "Sully");
console.log("monster", monster);

monster.save()
.then((m)=> {
  console.log("Monster saved", m.get("monster_name"));
})
