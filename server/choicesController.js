const foodchoices = [
    {
        id: 1,
        name: "Rice",
        image: `https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/316167_2200-800x1200.jpg`,
        category: "base"
    },
    {
        id: 2,
        name: "Noodles",
        image: `https://life-in-the-lofthouse.com/wp-content/uploads/2019/04/Easy-Thai-Noodles-500x500.jpg`,
        category: "base"
    },
    {
        id: 3,
        name: "Pasta",
        image: `https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg`,
        category: "base"
    },
    {
        id: 4,
        name: "Beef",
        image: `https://images-gmi-pmc.edge-generalmills.com/42fb4d81-8d92-40e2-9f0a-524edce5ca74.jpg`,
        category: "entree"
    },
    {
        id: 5,
        name: "Chicken",
        image: `https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1474316393%2Fjerk-chicken-XL-RECIPE2016.jpg%3Fitok%3DyDxZ9S5q`,
        category: "entree"
    },
    {
        id: 6,
        name: "Pork",
        image: `https://www.culinaryhill.com/wp-content/uploads/2018/04/Grilled-Pork-Chops-Culinary-Hill-square-e1580268806925.jpg`,
        category: "entree"
    },
    {
        id: 7,
        name: "Corn",
        image: `https://www.culinaryhill.com/wp-content/uploads/2020/04/Chipotle-Corn-Salsa-Recipe-Copycat-Culinary-Hill-LR-06SQ-500x375.jpg`,
        category: "sides"
    },
    {
        id: 8,
        name: "Fries",
        image: `https://api.thelevelup.com/v15/order_ahead/menu_image_stores/70538/image?density=3&height=300&width=420`,
        category: "sides"
    },
    {
        id: 9,
        name: "Veggies",
        image: `https://image.shutterstock.com/image-photo/mixed-vegetables-bowl-selective-focus-260nw-413935435.jpg`,
        category: "sides"
    }
]
// console.log(foodChoices)

module.exports = {
    getAllChoices: (req, res) => {
        res.status(200).send(foodchoices)
    },
};