let arrayOfImages = [
  {
    id: "doesn't matter",
    identifier: "image",
    imageSrc: "image data we need",
    text: "This goes 1st",
    sequence: 1  
  },{
    id: "doesn't matter 2",
    identifier: "image",
    imageSrc: "image data we need",
    text: "This goes 3rd",
    sequence: 3 
  }
]

let arrayOfDescriptions = [
  {
    id: "doesn't matter",
    identifier: "description",
    description: "This is the content that will get displayed",
    text: "This goes 2nd",
    sequence: 2 
  },{
    id: "doesn't matter",
    identifier: "description",
    description: "This is the content that will get displayed after an image",
    text: "This goes 4th",
    sequence: 4
  }
]

const conditionalRender = (objectToBeChecked) => {
  if(objectToBeChecked == undefined){
    console.log('No data')
    return
  }

  if(objectToBeChecked.identifier === "image"){
    console.log(`This is an image. It is number ${objectToBeChecked.sequence} to be rendered. Render with the Image data`)
  } else if (objectToBeChecked.identifier === "description"){
    console.log(`This is a description. It is number ${objectToBeChecked.sequence} to be rendered. Render to display the paragraph`)
  }
}

const methodOne = (images, descriptions) => {
  // 1 - push items into array
  let holder = images
  holder = holder.concat(...descriptions)

  // 2 - order by sequence
  holder.sort((a,b) => a.sequence - b.sequence)

  // Map through with conditional rendering
  holder.forEach(conditionalRender)
}

const methodTwo = (sequenceLength, images, descriptions) => {
  // 1 - inherit sequence length from Topic schema
  // 2 - make loop to go through sequence
  for(i=1; i <= sequenceLength; i++){
    // check each array for matching sequence
    let workingItem 

    if(images.filter(object => object.sequence === i).length > 0){
      workingItem = images.filter(object => object.sequence === i)[0]
    } else if(descriptions.filter(object => object.sequence === i)){
      workingItem = descriptions.filter(object => object.sequence === i)[0]
    }
    conditionalRender(workingItem)
  }
  console.log('End of use')
}

// TEST THEM HERE

const testOne =() => {
  methodOne(arrayOfImages, arrayOfDescriptions)
}

const testTwo = () => {
  methodTwo(6, arrayOfImages, arrayOfDescriptions)
}
// methodOne(arrayOfImages, arrayOfDescriptions)
// methodTwo(6, arrayOfImages, arrayOfDescriptions)