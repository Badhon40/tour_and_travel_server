import { ITour } from "./tour.interface";
import Tour from "./tour.model";

const createTour = async (tour: ITour): Promise<ITour> => {
  const result = await Tour.create(tour);
  return result;
}

const getTours = async (query : Record<string,unknown>) => {

  const queryObj ={...query}

  const excludedObj = ['searchTerm', 'page', 'limit', 'sortOrder','sortBy'];
  excludedObj.forEach((key)=> delete queryObj[key])
  const searchTerm = query?.searchTerm || '';

  const searchableFields = ['name', 'location', 'startDate', 'endDate'];

    // const result= await Tour.find({
    //   $or : [{
    //     name :{
    //       $regex : searchTerm,
    //       $option : 'i'
    //     }
    //   },{
    //     location :{
    //       $regex : searchTerm,
    //       $option : 'i'
    //     }
    //   }, {
    //     startDate :{
    //       $regex : searchTerm,
    //       $option : 'i'
    //     }
    //   }, {
    //     endDate :{
    //       $regex : searchTerm,
    //       $option : 'i'
    //     }
    //   }]
    // })

    const searchQuery = Tour.find({
      $and : [
        {
          $or : searchableFields.map((field)=>{
            return {
              [field] :{
                $regex : searchTerm,
                $option :'i'
              }
            }
          })
        }
      ]
    })

     const fillterQuery = searchQuery.find(queryObj)


    const page = Number(query?.page) || 1;
    const limit = Number(query?.limit) || 10;
    const skip = (page - 1) * limit;

    const paginatedQuery = fillterQuery.skip(skip).limit(limit)

    // sorting

    let sortStr;

    if(query?.sortBy && query?.sortOrder){
      const sortBy = query?.sortBy;
     const sortOrder = query?.sortOrder

     sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`
    }

    // const sortQuery= await paginatedQuery.sort(sortStr)
    const sortQuery = paginatedQuery.sort(sortStr)

    let 

    return result;
}

const getSingleTour = async (id: string) => {
    const result = await Tour.findById(id);     

    return result
}

const updateTour = async (id: string, tour: Partial<ITour>) => {
    const result = await Tour.findByIdAndUpdate(id, tour, { 
        new: true,
        runValidators: true,
    });
    return result;  

}

const deleteTour = async (id: string) => {
    const result = await Tour.findByIdAndDelete(id); 
    return result;  
}

const getNextSchedule = async (id: string) => {
    const tour = await Tour.findById(id); 

  const nextSchedule = tour?.getNextNearestStartDateAndEndDate()

  return {
    tour, 
    nextSchedule
  }
}

const tourService = {
  createTour,
  getTours,
  getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
};

export default tourService;