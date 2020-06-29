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
        image: `https://soupeduprecipes.com/wp-content/uploads/2019/08/mongolian-beef-recipe.jpg`,
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
        image: `data:image/jpeg;base64,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`,
        category: "sides"
    }
]
// console.log(foodChoices)

module.exports = {
    getAllChoices: (req, res) => {
        res.status(200).send(foodchoices)
    },
};

    