/\*

.products\_\_container--grid {
width: 90%;
margin: 0 auto;
}

.products\_\_container {
display: flex;
align-items: center;
gap: 1rem;
}

.filter\_\_items--container {
display: block; /\* none

    min-width: 300px;
    width: 30%;
    background-color: black;
    height: calc(100vh - 100px);

}

.products-render\_\_container {
width: 100%;
min-width: 400px;
height: calc(100vh - 100px);
}

.filter-items {
background-color: bisque;
opacity: 0;
height: 0;
overflow: hidden;
transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;
}

.filter-items.show {
opacity: 1;
height: auto;
}

.cards\_\_container {
margin: 0 auto;

    .card {
      width: 100%;
      height: 300px;
      border: 1px solid;
    }

}

.card {
display: flex;
}

.card\_\_image-container {
width: 40%;
height: 100%;
background-color: black;
}

.card\_\_info-container {
width: 100%;
height: 100%;
background-color: blanchedalmond;
}

/\*

/\*
.products\_\_container--grid {
width: 90%;
margin: 0 auto;
}

.products\_\_container {
display: flex;
align-items: center;
gap: 1rem;
}

.filter\_\_items--container {
/\*display: block;

    min-width: 300px;
    width: 30%;
    background-color: black;
    height: calc(100vh - 100px);

}

.products-render\_\_container {
width: 100%;
min-width: 400px;
height: calc(100vh - 100px);
}

.filter-items {
background-color: bisque;
opacity: 0;
height: 0;
overflow: hidden;
transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;
}

.filter-items.show {
opacity: 1;
height: auto;
}

.products\_\_container--grid {
background-color: rgb(159, 159, 162);

    .products__container {
      display: flex;
      flex-direction: column;
      background-color: red;
    }

    .card {
      width: 100%;
      height: 300px;
    }

}
