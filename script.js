const questions = [{
        question: "A driver license is required for the following?",
        answers: [
            { text: "Sitting in the driver's seat of a car while the engine is running.", correct: false },
            { text: "Steering a car while it is being pushed or towed by another vehicle.", correct: false },
            { text: "Both", correct: true },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "If a law enforcement officer swears that a driver has refused a legal chemical test, the Division of Motor Vehicles must:",
        answers: [
            { text: "Place the driver on probation.", correct: false },
            { text: "Wait for a court decision before taking action.", correct: false },
            { text: "Assign the driver to the Driver Improvement Clinic.", correct: false },
            { text: "Revoke the driver's license for at least 12 months.", correct: true },
        ],
    },
    {
        question: "Which of the following happen(s) under the point system?",
        answers: [
            { text: "A driver is sent a warning letter when he/she gets 4 points within 3 years.", correct: false },
            { text: "A driver who gets 12 points within 3 years may lose his/her license.", correct: true },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "When a driver has a total of 7 points, which of the following may happen?",
        answers: [
            { text: "The driver can be required to file proof of financial responsibility.", correct: false },
            { text: "The driver can have 3 points deducted if he/she satisfactorily completes a Driver Improvement Clinic.", correct: true },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "Conviction for which of the following carries the highest number of points?",
        answers: [
            { text: "Reckless driving.", correct: false },
            { text: "Hit and run with property damage.", correct: false },
            { text: "Driving without a license.", correct: false },
            { text: "Passing a stopped school bus unloading children.", correct: true  },
        ],
    },
    {
        question: "A driver will lose his/her license if he/she is convicted of:",
        answers: [
            { text: "Driving without a license.", correct: false },
            { text: "Passing a stopped school bus.", correct: false },
            { text: "Failing to yield the right-of-way.", correct: false },
            { text: "Speeding more than 75 mph in a 55mph zone.", correct: true  },
        ],
    },
    {
        question: "To get a revoked driver license restored, a person must do which of the following?",
        answers: [
            { text: "Obtain permission from the Driver License Section in Raleigh to reapply for a license.", correct: false },
            { text: "Go to a driver license office, pay a restoration fee, and reapply for a license.", correct: false },
            { text: "Both", correct: true },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "Roughly half of all traffic fatalities involve which of the following?",
        answers: [
            { text: "A drunken person.", correct: true  },
            { text: "More than 1 car.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "The percentage of highway deaths caused by drunken persons is about:",
        answers: [
            { text: "10%", correct: false },
            { text: "25%", correct: false },
            { text: "50%", correct: true  },
            { text: "67%", correct: false },
        ],
    },
    {
        question: "Which of the following statements about pedestrian deaths is correct?",
        answers: [
            { text: "In cities, 2 out of 5 people killed in motor vehicle accidents are pedestrians.", correct: true },
            { text: "Most of the pedestrians killed in all traffic accidents are teenagers.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "When you are walking at night along a road without sidewalks, you should do which of the following?",
        answers: [
            { text: "Walk on the left, facing traffic.", correct: true },
            { text: "Keep your back to oncoming traffic.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "If you approach an intersection where there are no traffic lights/signs and a pedestrian is attempting to cross your path, who has the right-of-way?",
        answers: [
            { text: "The pedestrian.", correct: true  },
            { text: "The driver of the car.", correct: false },
            { text: "No one.", correct: false },
            { text: "Whoever reaches the intersection first.", correct: false },
        ],
    },
    {
        question: "If you are walking along a road at night, what should you do?",
        answers: [
            { text: "Walk on the right-hand side with the traffic.", correct: false },
            { text: "Wear or carry something white.", correct: true },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "A safe driver does which of the following?",
        answers: [
            { text: "Watches the side of the road over the hood to stay in line.", correct: false },
            { text: "Frequently checks the rear-view and side mirrors.", correct: true },
            { text: "Drinks coffee while driving at night to stay alert.", correct: false },
            { text: "Keeps 2 car lengths between his/her car and the next car on the expressway.", correct: false },
        ],
    },
    {
        question: "As you approach an intersection to make a right turn, you should turn on your right turn signal and do which of the following?",
        answers: [
            { text: "Steer slightly toward the center of the road to give yourself room to clear the corner.", correct: false },
            { text: "Hold your arm straight out the window.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: true },
        ],
    },
    {
        question: "If you begin to feel sleepy while driving on a long trip, you should do which of the following?",
        answers: [
            { text: "Open a window or vent to let in fresh air.", correct: true },
            { text: "Increase your speed.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "When driving on a long trip, you should:",
        answers: [
            { text: "Rest your eyes from time to time by rubbing them.", correct: false },
            { text: "Avoid looking at any one thing for more than a few seconds.", correct: true },
            { text: "Keep your eyes on the center of the road straight ahead.", correct: false },
            { text: "Spend as much time looking in your mirrors as you do looking in front of you.", correct: false },
        ],
    },
    {
        question: "In order to avoid being hit in the rear by another vehicle, you should do which of the following?",
        answers: [
            { text: "Drive cautiously and use your brakes often.", correct: false },
            { text: "Check your rear-view mirrors often.", correct: true },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "Studies have shown which of the following to be a serious traffic hazard?",
        answers: [
            { text: "Middle-aged drivers.", correct: false },
            { text: "Slow drivers.", correct: true },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "Very slow driving is especially dangerous in which of the following situations?",
        answers: [
            { text: "Just after passing the crest of a hill.", correct: false },
            { text: "Just after rounding a curve.", correct: false },
            { text: "Both", correct: true },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "Which statement(s) concerning speed limits on the open road in North Carolina is correct?",
        answers: [
            { text: "Unless otherwise posted, the speed limit for passenger cars and pickup trucks is 65 mph.", correct: false },
            { text: "The speed limit for a school activity bus is 35 mph.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: true },
        ],
    },
    {
        question: "Which of the following statement(s) about speed limits for cars in North Carolina is correct?",
        answers: [
            { text: "The speed limit outside a city is 55mph unless otherwise posted.", correct: true },
            { text: "The speed limit inside a city is 25 mph unless otherwise posted.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
	{
		question: "When rounding a curve, a car tends to:",
		answers: [
		  { text: "Speed up.", correct: false },
		  { text: "Move to the inside of the curve.", correct: false },
		  { text: "Stay in the center of the lane.", correct: false },
		  { text: "Move to the outside of the curve.", correct: true },
		],
	},
    {
        question: "Which of the following statements about speed limits in North Carolina is correct?",
        answers: [
            { text: "Unless otherwise posted, the speed limit inside a city is 35 mph.", correct: true },
            { text: "Unless otherwise posted, the speed limit for a school activity bus is 25 mph.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "When rounding a sharp curve, you should do which of the following?",
        answers: [
            { text: "Stay as far to the left of your lane as possible.", correct: false },
            { text: "Brake in the sharpest part of the curve.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: true },
        ],
    },
    {
        question: "The driver of a truck going downhill with a curve should do the following:",
        answers: [
            { text: "Use a lower gear.", correct: true },
            { text: "Pump the brakes when reaching the curve.", correct: false },
            { text: "Brake firmly and steadily going.", correct: false },
            { text: "Speed up slightly on the curve to maintain control of the truck.", correct: false },
        ],
    },
    {
        question: "To reduce speed while going down a steep hill, you should do which of the following?",
        answers: [
            { text: "Use a lower gear.", correct: true },
            { text: "Drive in a zigzag pattern.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "If you wish to pass the car ahead on a two-lane road, you should do which of the following?",
        answers: [
            { text: "Sound your horn to signal your intention to the driver of the car ahead.", correct: false },
            { text: "Give a left turn signal to let the driver behind you know your intention.", correct: false },
            { text: "Both", correct: true },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "Passing on the right is legal on which of the following?",
        answers: [
            { text: "A 4-lane highway with 2-lanes going in each direction.", correct: false },
            { text: "On a one-way street.", correct: false },
            { text: "Both", correct: true },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "When backing your car, you should do which of the following?",
        answers: [
            { text: "Move at no more than 10 mph.", correct: true },
            { text: "Keep both hands on the steering wheel.", correct: false },
            { text: "Both", correct: false },
            { text: "Neither", correct: false },
        ],
    },
    {
        question: "Accidents occur most frequently at which of the following?",
        answers: [
            { text: "Curves.", correct: false },
            { text: "Hills.", correct: false },
            { text: "Narrow bridges.", correct: false },
            { text: "Intersections.", correct: true },
        ],
    },
	{
    question: "Four vehicles approach an intersection with a 4-way stop at the same time. Car B is ahead of Car A and both are in the same lane and want to proceed straight across. Car C is across the intersection from Car B and wants to proceed straight as well. Car D is to the right of Car B and wants to make a right turn. Which car must yield?",
    answers: [
      { text: "Car A.", correct: false },
      { text: "Car B.", correct: false },
      { text: "Car C.", correct: false },
      { text: "Car D.", correct: true },
		],
	},
	{
    question: "Highway accidents occur most frequently:",
    answers: [
      { text: "On hills.", correct: false },
      { text: "On curves.", correct: false },
      { text: "At intersections.", correct: true },
      { text: "On bridges.", correct: false },
		],
	},
	{
    question: "Three vehicles approach an uncontrolled intersection. Car A is on the right of Car B. Car C is on the left of Car B. In which order should the cars pass through the intersection?",
    answers: [
      { text: "Car A, Car B, Car C.", correct: true },
      { text: "Car B, Car A, Car C.", correct: false },
      { text: "Car C, Car A, Car B.", correct: false },
      { text: "Car B, Car C, Car A.", correct: false },
		],
	},
	{
    question: "Two vehicles approach an intersection going in opposite directions with no signs or traffic lights. There is also a pedestrian waiting to cross the street and is walking in the same direction as Car 1. Car 1 wants to proceed straight through the intersection. Car 2 wants to make a left turn. In this situation, the right-of-way belongs to:",
    answers: [
      { text: "Driver of Car 1 only.", correct: false },
      { text: "Driver of Car 2 only.", correct: false },
      { text: "Pedestrian only.", correct: false },
      { text: "Driver of Car 1 and the pedestrian.", correct: true },
		],
	},
	{
    question: "Three vehicles approach an uncontrolled intersection. Car A wants to make a left turn and is across the intersection from Car B. Car B is ahead of Car C, and both are in the same lane traveling in the same direction and want to proceed straight through the intersection. The law gives the right-of-way:",
    answers: [
      { text: "To Car A Only.", correct: false },
      { text: "To Car A and Then Car B.", correct: false },
      { text: "To Car B and then Car A.", correct: false },
      { text: "To Car B.", correct: true },
		],
	},
	{
    question: "If you come to an unmarked intersection where it is hard to see in all directions because of trees or buildings, you should:",
    answers: [
      { text: "Drive at the posted speed limit.", correct: false },
      { text: "Stop near the center of the intersection and continue if it is safe.", correct: false },
      { text: "Slow down and sound your horn to warn drivers who cannot see you.", correct: false },
      { text: "Stop at the intersection and move forward slowly.", correct: true },
		],
	},
	{
    question: "When driving on a city street, you should watch out for which of the following?",
    answers: [
      { text: "Traffic coming from side streets.", correct: false },
      { text: "Animals or small children darting from between parked cars.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "When driving in heavy traffic, you should do which of the following?",
    answers: [
      { text: "Watch out for drivers who make quick stops.", correct: true },
      { text: "Yield to pedestrians only at marked crosswalks.", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{	
    question: "If you are in the wrong lane for making a left turn at an intersection, you should:",
    answers: [
      { text: "Go to the next intersection and turn there.", correct: true },
      { text: "Back up and move into the correct lane for turning.", correct: false },
      { text: "Wait until all other cars have cleared the intersection and turn.", correct: false },
      { text: "Signal the driver in the car beside you that you intend to turn in front of him.", correct: false },
		],
	},
	{
    question: "The most frequent type of accident on interstate highways is:",
    answers: [
      { text: "A sideswipe collision.", correct: false },
      { text: "Running off the road.", correct: false },
      { text: "A rear-end collision.", correct: true },
      { text: "A head-on collision.", correct: false },
		],
	},
	{
    question: "When taking a long trip on an interstate highway, you should plan on doing which of the following?",
    answers: [
      { text: "Stopping every 100 miles at a rest area.", correct: true },
      { text: "Scheduling some hours of night driving to avoid heavy traffic.", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "You are driving on an interstate highway when a breakdown forces you to the shoulder. You should:",
    answers: [
      { text: "Sit in the car until help arrives.", correct: false },
      { text: "Tie a handkerchief to the left door handle and stand beside the left front fender.", correct: false },
      { text: "Raise the hood and tie a white handkerchief to the left door handle.", correct: true },
      { text: "Raise the hood and stand behind the car so drivers of oncoming cars can see you.", correct: false },
		],
	},
	{
    question: "If you miss your exit on an interstate highway, you can do which of the following?",
    answers: [
      { text: "Make a U-turn.", correct: false },
      { text: "Go on to the next exit.", correct: true },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "A driver may be temporarily blinded at night by which of the following?",
    answers: [
      { text: "Glare from the headlights of other cars.", correct: false },
      { text: "Flame from a match he strikes to light a cigarette.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "In which of the following situations should you use your low beams?",
    answers: [
      { text: "At night in the city.", correct: false },
      { text: "In foggy or misty weather.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "If the driver of an approaching car fails to dim his/her lights, you should do which of the following?",
    answers: [
      { text: "Watch the road ahead to avoid looking at the lights of the other car.", correct: false },
      { text: "Flick your headlight beams high and low once or twice.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "When driving on a highway at night, you should never use your high-beam headlights if you are:",
    answers: [
      { text: "Slowing down for a turn.", correct: false },
      { text: "Traveling on a road with no median.", correct: false },
      { text: "Going downhill.", correct: false },
      { text: "Following another car.", correct: true },
		],
	},
	{
    question: "If it starts to drizzle while you are driving, you should do which of the following?",
    answers: [
      { text: "Slow down because the rain will loosen oil and gravel on the road.", correct: false },
      { text: "Allow at least twice the normal following distance.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "Roads are likely to be especially slick:",
    answers: [
      { text: "Just after they have been paved.", correct: false },
      { text: "Just after it has begun to rain or drizzle.", correct: true },
      { text: "After it has been raining for several hours.", correct: false },
      { text: "In exceptionally cold, dry weather.", correct: false },
		],
	},
	{
    question: "When driving through heavy fog, you should:",
    answers: [
      { text: "Turn on your bright lights.", correct: false },
      { text: "Slow down.", correct: true },
      { text: "Follow the car in front you closely.", correct: false },
      { text: "Turn on your parking lights.", correct: false },
		],
	},
	{
    question: "When driving in a heavy snowstorm during the day, you should use:",
    answers: [
      { text: "Parking lights.", correct: false },
      { text: "Low-beam headlights.", correct: true },
      { text: "Four-way flashers.", correct: false },
      { text: "High-beam headlights.", correct: false },
		],
	},
	{
    question: "The best way to get good traction on hard packed snow is to:",
    answers: [
      { text: "Put chains on your tires.", correct: true },
      { text: "Use snow tires.", correct: false },
      { text: "Have lower than usual air pressure in your tires.", correct: false },
      { text: "Carry heavy weights in your trunk.", correct: false },
		],
	},
	{
    question: "When trying to pull away from a slippery surface in a car with a manual transmission, you should do which of the following:",
    answers: [
      { text: "Start in second or high gear.", correct: true },
      { text: "Accelerate rapidly.", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "When pulling a trailer down a long steep hill, you should do which of the following?",
    answers: [
      { text: "Drive in a lower gear.", correct: false },
      { text: "Keep in the right lane.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "If your brakes fail, you should do which of the following?",
    answers: [
      { text: "Shift into a lower gear.", correct: false },
      { text: "Use the emergency brake.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "Wet brakes can be dried out by doing which of the following?",
    answers: [
      { text: "Turning on the heater.", correct: false },
      { text: "Slow down and then press the gas pedal as you keep a light pressure on the brake pedal.", correct: true },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "If you should have a blowout while traveling at a high speed, you should do which of the following?",
    answers: [
      { text: "Brake firmly as soon as you notice the blowout.", correct: false },
      { text: "Grip the steering wheel firmly to keep the car from swerving.", correct: true },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "When changing a flat tire, you should do which of the following?",
    answers: [
      { text: "Put the vehicle in neutral gear.", correct: false },
      { text: "Block the wheels.", correct: true },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "If your car breaks down on the highway at night, what should you do?",
    answers: [
      { text: "Park the car completely off the road.", correct: true },
      { text: "Turn on the high-beam lights.", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "If your car breaks down on a highway at night, you should do which of the following?",
    answers: [
      { text: "Raise the hood and tie a white handkerchief to the left door handle.", correct: false },
      { text: "Switch on the parking lights.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "If your vehicle has run off the road onto the shoulder, you should:",
    answers: [
      { text: "Shift quickly into a lower gear.", correct: false },
      { text: "Brake with heavy constant pressure.", correct: false },
      { text: "Apply the emergency brake.", correct: false },
      { text: "Take your foot off the gas pedal gradually.", correct: true },
		],
	},
	{
    question: "Skids are likely to occur on which of the following roads?",
    answers: [
      { text: "One on which snow has become packed.", correct: true },
      { text: "One that has just been paved.", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "If you have to come to a stop on an icy road and your car is not equipped with ABS brakes, you should:",
    answers: [
      { text: "Use your parking brake.", correct: false },
      { text: "Put the brake on hard.", correct: false },
      { text: "Apply the brake in short hard jabs.", correct: false },
      { text: "Pump the brake pedal lightly.", correct: true },
		],
	},
	{
    question: "What should you do when you begin to skid?",
    answers: [
      { text: "Turn the steering while in the direction in which the rear end of the car is skidding.", correct: false },
      { text: "Reduce pressure on the gas pedal.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "A driver who is involved in an accident should do which of the following?",
    answers: [
      { text: "Make an immediate report to the nearest law enforcement agency.", correct: false },
      { text: "Notify his insurance company.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "A flashing red traffic signal at an intersection means which of the following?",
    answers: [
      { text: "Slow down and proceed with caution.", correct: false },
      { text: "Stop, only if it is necessary to yield the right-of-way.", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: true },
		],
	},
	{
    question: "A flashing yellow traffic signal at an intersection means:",
    answers: [
      { text: "No right turn.", correct: false },
      { text: "Yield the right-of-way.", correct: false },
      { text: "No left turn.", correct: false },
      { text: "Slow down and proceed with caution.", correct: true },
		],
	},
	{
    question: "A diamond-shaped sign would be used to warn drivers of which of the following driving hazards?",
    answers: [
      { text: "A railroad crossing.", correct: false },
      { text: "A deer crossing.", correct: true },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "A diamond-shaped traffic sign means:",
    answers: [
      { text: "No left turn.", correct: false },
      { text: "Come to a full stop.", correct: false },
      { text: "Yield the right-of-way.", correct: false },
      { text: "Slow down and drive with care.", correct: true },
		],
	},
	{
    question: "When can you disregard a signal given by a police officer directing traffic?",
    answers: [
      { text: "An emergency vehicle is approaching.", correct: false },
      { text: "The officer's signal is in conflict with a traffic signal.", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: true },
		],
	},
	{
    question: "What is the main color for signs in highway work zones?",
    answers: [
      { text: "Red", correct: false },
      { text: "White", correct: false },
      { text: "Orange", correct: true },
      { text: "Green", correct: false },
		],
	},
	{
    question: "When does the law give a blind pedestrian special consideration at intersections where there are no traffic lights?",
    answers: [
      { text: "Only when he is alone.", correct: false },
      { text: "If he holds out a white cane or has a guide dog with him.", correct: true },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "Which of the following statements about bicycle riders is correct?",
    answers: [
      { text: "They must ride their bicycles facing traffic.", correct: false },
      { text: "They are likely to be seriously injured in almost any collision with a car.", correct: true },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "In North Carolina, which of the following is required on all cars?",
    answers: [
      { text: "License plate lights.", correct: true },
      { text: "Courtesy lights.", correct: false },
      { text: "Fender lights.", correct: false },
      { text: "Backup lights.", correct: false },
		],
	},
	{
    question: "Your brakes need checking if:",
    answers: [
      { text: "There is a strong smell of gasoline in the car.", correct: false },
      { text: "The engine stalls at stop lights.", correct: false },
      { text: "Light gusts of wind make the car difficult to control.", correct: false },
      { text: "There is a squeaking noise when you step on the brake pedal.", correct: true },
		],
	},
	{
    question: "Which of the following statements about horns and sirens is/are correct?",
    answers: [
      { text: "Every licensed motor vehicle must have a horn.", correct: false },
      { text: "Only law enforcement and emergency vehicles may have sirens.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "Every motor vehicle must be equipped with:",
    answers: [
      { text: "A muffler.", correct: true },
      { text: "4-ply tires.", correct: false },
      { text: "Mud guards.", correct: false },
      { text: "Shoulder harnesses.", correct: false },
		],
	 },
	 {
    question: "The system that carries harmful fumes from the engine to the rear of the car and releases them is called the:",
    answers: [
      { text: "Ignition system.", correct: false },
      { text: "Fuel system.", correct: false },
      { text: "Suspension system.", correct: false },
      { text: "Exhaust system.", correct: true },
		],
	},
	{
    question: "A leaky exhaust system should be repaired because it:",
    answers: [
      { text: "Wastes gas and oil.", correct: false },
      { text: "Causes the engine to run hot.", correct: false },
      { text: "May allow dangerous fumes to enter the car.", correct: true },
      { text: "Makes the engine hard to start and likely to stall.", correct: false },
		],
	},
	{
    question: "A car that pitches and tosses in normal driving and leans heavily to the side in turns is likely to have trouble in which of the following systems?",
    answers: [
      { text: "Ignition.", correct: false },
      { text: "Steering.", correct: false },
      { text: "Brake.", correct: false },
      { text: "Suspension.", correct: true },
		],
	},
	{
    question: "Which traffic is required to stop if a school bus makes a passenger stop in the far right lane on a five-lane street?",
    answers: [
      { text: "All lanes of traffic.", correct: false },
      { text: "Lanes going in the same direction as the school bus.", correct: true },
      { text: "Lanes going in the opposite direction of the bus.", correct: false },
      { text: "Turning lane only.", correct: false },
		],
	},
	{
    question: "The maximum speed limit for a full-size public school bus in North Carolina is:",
    answers: [
      { text: "55mph", correct: false },
      { text: "45mph", correct: true },
      { text: "35mph", correct: false },
      { text: "25mph", correct: false },
		],
	},
	{
    question: "Which of the following statements is false?",
    answers: [
      { text: "A heavier person has to ingest more alcohol than a lighter person to reach the same blood alcohol content.", correct: false },
      { text: "A heavier person can eliminate alcohol faster than a lighter person.", correct: true },
      { text: "If two persons drink at the same speed, the heavier person will need longer to reach the same blood alcohol concentration.", correct: false },
      { text: "A heavier person needs to drink more than a lighter person because alcohol mixes with the body fluids. Obviously, a heavier person has more body fluids than a lighter person.", correct: false },
		],
	},
	{
    question: "A person has been drinking but did not reach 0.08. Can we assume that he/she can drive safely?",
    answers: [
      { text: "Yes, if the driver ate before drinking.", correct: false },
      { text: "Yes, if the driver is a heavy person.", correct: false },
      { text: "No, because even smaller amounts can affect judgment.", correct: true },
      { text: "Yes, if the driver is not too tired.", correct: false },
		],
	},
	{
    question: "What happens if you drink alcohol and take medication at the same time?",
    answers: [
      { text: "Medication always cancels the effects of alcohol.", correct: false },
      { text: "Alcohol always cancels the effects of medication.", correct: false },
      { text: "Both may combine and have unpredictable effects.", correct: true },
      { text: "There is no scientific evidence that it changes anything.", correct: false },
		],
	},
	{
    question: "What should you do if a doctor prescribes you some medication but you must drive?",
    answers: [
      { text: "Ask the doctor whether you can drive or not.", correct: true },
      { text: "Check your reactions as you drive and be ready to stop if you feel affected.", correct: false },
      { text: "Bring an antidote to cancel the effects of the drug.", correct: false },
      { text: "Do not worry; prescribed drugs never affect driving.", correct: false },
		],
	},	
	{
    question: "Can you be prosecuted in a criminal court of law if you are intercepted as you are driving under the influence of prescribed medication?",
    answers: [
      { text: "Not if you bring the prescription with you.", correct: false },
      { text: "Yes, the law requires you to be in full control of yourself when you drive.", correct: true },
      { text: "No, if something happens the doctor will be prosecuted.", correct: false },
      { text: "No, as long as you do not reach 0.08.", correct: false },
		],
	},
	{
    question: "Is it true that coffee can neutralize the effects of alcohol?",
    answers: [
      { text: "Yes, absolutely.", correct: false },
      { text: "No, only the liver can eliminate alcohol.", correct: true },
      { text: "Yes, if you drink it black and without sugar.", correct: false },
      { text: "Yes, if you can take a cold shower.", correct: false },
		],
	},
	{
    question: "What is one of the effects of alcohol on the driver's eyes?",
    answers: [
      { text: "The eyes scan very actively.", correct: false },
      { text: "The eyes tend to stare at a point.", correct: true },
      { text: "The eyes notice better motions on the sides.", correct: false },
      { text: "The eyes catch very early other drivers' mistakes.", correct: false },
		],
	},
	{
    question: "Which one contains more alcohol?",
    answers: [
      { text: "12 ounces of beer (360ml).", correct: false },
      { text: "4 ounces of wine (150ml).", correct: false },
      { text: "1.5 ounces of spirits (45ml).", correct: false },
      { text: "They all have the same amount; .6 of an ounce (18ml) of alcohol.", correct: true },
		],
	},
	{
    question: "What is the effect of food when you drink alcohol?",
    answers: [
      { text: "There are no effects.", correct: false },
      { text: "There are no measurable effects.", correct: false },
      { text: "If you eat before drinking, alcohol enters the bloodstream at a slower pace.", correct: true },
      { text: "It neutralizes the effects of alcohol.", correct: false },
		],
	},
	{
    question: "Where does alcohol tend to concentrate more?",
    answers: [
      { text: "In the heart.", correct: false },
      { text: "In the brain.", correct: true },
      { text: "In the leg muscles.", correct: false },
      { text: "In the chest.", correct: false },
		],
	},
	{
    question: "If a law enforcement officer swears that a driver has refused a legal chemical test, the Division of Motor Vehicles must:",
    answers: [
      { text: "Place the driver on probation.", correct: false },
      { text: "Wait for a court decision before taking action.", correct: false },
      { text: "Assign the driver to the Driver Improvement Clinic.", correct: false },
      { text: "Revoke the driver's license for at least 12 months.", correct: true },
		],
	},
	{
    question: "A 20-year-old driver is convicted of driving after drinking alcohol.",
    answers: [
      { text: "He/She gets a 1-year revocation.", correct: true },
      { text: "He/She is imprisoned for 14 days.", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "What happens if a driver refuses to take a chemical test?",
    answers: [
      { text: "He/She gets an immediate 30-day revocation.", correct: false },
      { text: "The DMV adds an extra 12 months revocation.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "What happens if a driver is convicted of DWI while his/her license has already been revoked for a prior DWI?",
    answers: [
      { text: "This person's car may be seized and sold.", correct: false },
      { text: "He/She may be imprisoned.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "A driver was convicted of a second DWI 3 years ago. He/She gets convicted of DWI again.",
    answers: [
      { text: "He/She gets a permanent revocation.", correct: false },
      { text: "He/She is imprisoned from 14 days to 24 months.", correct: false },
      { text: "Both", correct: true },
      { text: "Neither", correct: false },
		],
	},
	{
    question: "A person has been convicted of DWI for the 4th time in 7 years.",
    answers: [
      { text: "This person may be imprisoned from 1 to 3 years.", correct: true },
      { text: "This person can only get a restricted license.", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: false },
		],
	},
];

  
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
	
	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;
		}
			button.addEventListener("click", selectAnswer);
		});
}

function resetState(){
	nextButton.style.display = "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}


function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`; 
  nextButton.innerHTML = "Take Again?";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startQuiz);
}

nextButton.addEventListener("click", () => {
    handleNextButton();
});

function handleNextButton() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    resetState();
	showQuestion();
  } else {
    showScore();
  }
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleQuestions();
	showQuestion();
}

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  questions.forEach(question => {
    for (let i = question.answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
    }
  });
}

startQuiz();

	

