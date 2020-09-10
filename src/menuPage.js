let menuPage = (() => {

    const menuContainer = document.createElement('div')
    menuContainer.setAttribute('id', "menuContainer")

    const menuTitle = document.createElement('div')
    menuTitle.setAttribute('id', 'menuTextMain')
    menuTitle.innerHTML = "Menu"
    menuContainer.appendChild(menuTitle)

    const menuItemContainer = document.createElement('div')
    menuItemContainer.setAttribute('id', 'menuItemContainer')


    let menuItems = {
        name: [
            "Hand Squeezed Tomato Juice", 
            "Salted Grilled Carrots",
            "Tomatoes Left on a Vine",
            "Chef's Choice"
        ],
        price: [
            "$7.99", 
            "$13.50",
            "$12.50",
            "$99.99" 
        ],
        description: [
            "Karen skillfully squeezes one whole tomato into a glass. If fresh tomatoes are out of stock, canned tomato paste will be mixed with water at table side.",
            "Karen takes three large/baby carrots and grills them on her Panini maker, finished with a light drizzle of kitchen salt.",
            "Undisturbed from it's natural habit, the tomatoes are left on the vine and artisically presented.",
            "A customer favorite. Karen will construct a holistic meal worthy of five Michelin stars. "

        ],
        imageSource: [
            "images/tomato.jpeg",
            "images/carrot.jpg",
            "images/tomatovine.png",
            "images/chefchoice.jpg"
        ]
    }
    
    //creates cards for all the items
    for (let i = 0; i < menuItems.name.length; i++) {
        const itemContainer = document.createElement('div')
        itemContainer.classList.add('itemContainer')

        const itemImage = document.createElement('img')
        itemImage.classList.add('itemImage')
        itemImage.setAttribute('id', `itemImage${i}`)
        itemImage.src = `${menuItems.imageSource[i]}`
        
        const itemImageContainer = document.createElement('div')
        itemImageContainer.classList.add('itemImageContainer')
        itemImageContainer.appendChild(itemImage)

        const itemName = document.createElement('div')
        itemName.classList.add('itemName')
        itemName.innerHTML = `${menuItems.name[i]}`

        const itemPrice = document.createElement('div')
        itemPrice.classList.add('itemPrice')
        itemPrice.innerHTML = `${menuItems.price[i]}`
        
        const itemTitle = document.createElement('div')
        itemTitle.classList.add('itemTitle')
        itemTitle.appendChild(itemName)
        itemTitle.appendChild(itemPrice)

        const itemDescription = document.createElement('div')
        itemDescription.classList.add('itemDescription')
        itemDescription.innerHTML = `${menuItems.description[i]}`

        itemContainer.appendChild(itemImageContainer)
        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemDescription)

        menuItemContainer.appendChild(itemContainer)
    }

    menuContainer.appendChild(menuItemContainer)
    return {
        menuContainer
    }
})();

export{menuPage}