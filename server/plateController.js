const foodchoices = [
    {
        id: 1,
        name: "Rice",
        image: "",
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

module.exports = {
    getChoiceByID: (req,res) => {
        console.log(foodchoices)
        const { food_id } = req.params
        const foodchoice = foodchoices.find((element) => element.id === +food_id)
        console.log(foodchoice)
        res.status(200).send(foodchoice)
    },  
}