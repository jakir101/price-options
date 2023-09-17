import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30/month",
          "features": [
            "Access to cardio equipment",
            "Free weights area",
            "Locker room access",
            "Unlimited water station usage",
            "Discounts on gym apparel"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$50/month",
          "features": [
            "Access to all gym equipment",
            "Group fitness classes",
            "Personal trainer sessions (2/month)",
            "Sauna and spa access",
            "Towel service",
            "Nutrition consultation",
            "Access to exclusive members' events"
          ]
        },
        {
          "id": 3,
          "name": "Student Membership",
          "price": "$25/month",
          "features": [
            "Access to cardio equipment",
            "Free weights area",
            "Locker room access",
            "Valid student ID required",
            "Access during non-peak hours"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": "$80/month",
          "features": [
            "Access for two adults and two children",
            "Access to all gym equipment",
            "Group fitness classes",
            "Sauna and spa access",
            "Towel service",
            "Childcare service during workouts",
            "Family fitness classes"
          ]
        }
      ]
      
    return (
        <div>
            <h2 className="text-5xl">Best Prices In The Town</h2>
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;