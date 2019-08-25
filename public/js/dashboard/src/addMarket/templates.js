const getHTML = areaCount => `
<span id="area-group-${areaCount}">
  <div class="form-group">
    <label for="name">Name:</label>
    <input class="form-control" id="area-name-${areaCount}" type="text" placeholder="Area Name" name="market[areas][${areaCount}][name]"/>
  </div>
  <label for="market[areas][${areaCount}][cities]">Cities:</label>
  <span id="area-${areaCount}-cities-section">
    <div class="form-row mb-3">
      <div class="col-4">
        <input
        class="form-control"
        id="area-${areaCount}-city-0"
        name="market[areas][${areaCount}][cities][0]"
        placeholder="City"
        >
      </div>  
      <div class="col-4">
        <input
        class="form-control"
        id="area-${areaCount}-city-1"
        name="market[areas][${areaCount}][cities][1]"
        placeholder="City"
        >
      </div>
      <div class="col-4">
        <input
        class="form-control"
        id="area-${areaCount}-city-2"
        name="market[areas][${areaCount}][cities][2]"
        placeholder="City"
        >
      </div>
    </div>
    </span>
    <button id="area-${areaCount}-add-cities" class="btn btn-sm btn-primary" type="button">
      Add More Cities
    </button>
<span>
`;

const getAdditionalCitiesRow = (areaCount, cityCount) => `
<div class="form-row mb-3">
  <div class="col-4">
    <input
    class="form-control"
    id="area-${areaCount}-city-${cityCount}"
    name="market[areas][${areaCount}][cities][${cityCount}]"
    placeholder="City"
    >
  </div>  
  <div class="col-4">
    <input
    class="form-control"
    id="area-${areaCount}-city-${cityCount + 1}"
    name="market[areas][${areaCount}][cities][${cityCount + 1}]"
    placeholder="City"
    >
  </div>
  <div class="col-4">
    <input
    class="form-control"
    id="area-${areaCount}-city-${cityCount + 2}"
    name="market[areas][${areaCount}][cities][${cityCount + 2}]"
    placeholder="City"
    >
  </div>
</div>
`;

const getSavedAreaGroup = (name, cities, areaCount) => `
  <div class="form-row my-2">                  
    <div class="col-11">  
    <input class="form-control" id="saved-area-name-${areaCount}" type="text" value="${name}" placeholder="Area Name" name="market[areas][${areaCount}][name]"/>
    </div>
    <div class="col-1">
      <button 
        data-areacount="${areaCount}" 
        id="arrow-button-${areaCount}" 
        type="button" class="btn btn-sm btn-primary" 
        style="font-size: 1.2rem">
          <i 
          data-areacount="${areaCount}"
          class="fas fa-caret-down"></i>
      </button>
    </div>
  </div>

  <div id="saved-area-${areaCount}-alert"></div>
  <div id="saved-cities-section-${areaCount}">
  <label for="market[areas][${areaCount}][cities]" class="mt-2"><strong>Cities:</strong></label>
  <hr style="margin-bottom: -.5rem; margin-top: -.5rem;">
  <div class="form-row mb-3">    
  ${cities
    .map((city, index) => {
      return `<div class="col-4 mt-3">
      <input
      class="form-control saved-city-area-${areaCount}"
      id="saved-area-${areaCount}-city-${index}"
      name="market[areas][${areaCount}][cities][${index}]"
      placeholder="City"
      value="${city}"
      >
    </div>`;
    })
    .join("")} 
  </div>
  
  <div id="saved-cities-list-${areaCount}"></div>
  
  <button id="saved-area-${areaCount}-add-cities" data-areacount="${areaCount}" class="btn btn-sm btn-primary mb-2" type="button">
    Add More Cities
  </button>
  <hr/>
  </div>
`;

export { getHTML, getAdditionalCitiesRow, getSavedAreaGroup };
