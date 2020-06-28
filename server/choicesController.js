const foodchoices = [
    {
        id: 1,
        name: "Rice",
        image: `https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/6F320FC7-CBD7-419D-B790-24DA25E975F9/Derivates/9774C36E-8478-4BE3-A8CD-FF02AC5B9BCB.jpg`,
        category: "base"
    },
    {
        id: 2,
        name: "Noodles",
        image: "",
        category: "base"
    },
    {
        id: 3,
        name: "Pasta",
        image: "",
        category: "base"
    },
    {
        id: 4,
        name: "Beef",
        image: "",
        category: "entree"
    },
    {
        id: 5,
        name: "Chicken",
        image: "",
        category: "entree"
    },
    {
        id: 6,
        name: "Pork",
        image: "",
        category: "entree"
    },
    {
        id: 7,
        name: "Corn",
        image: "",
        category: "sides"
    },
    {
        id: 8,
        name: "Fries",
        image: "",
        category: "sides"
    },
    {
        id: 9,
        name: "Veggies",
        image: "",
        category: "sides"
    }
]
// console.log(foodChoices)

module.exports = {
    getAllChoices: (req, res) => {
        res.status(200).send(foodchoices)
    },
};