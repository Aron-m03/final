const exercises = {
  male: {
    children: [
      {
        name: "Push-Ups",
        description: "A bodyweight exercise that targets the chest, shoulders, and triceps.",
        targetMuscles: ["Chest", "Shoulders", "Triceps"],
        reps: "10-15"
      },
      {
        name: "Squats",
        description: "A bodyweight exercise that targets the quadriceps, hamstrings, and glutes.",
        targetMuscles: ["Quadriceps", "Hamstrings", "Glutes"],
        reps: "10-15"
      },
      {
        name: "Plank",
        description: "A bodyweight exercise that targets the core muscles.",
        targetMuscles: ["Core", "Shoulders", "Back"],
        reps: "30-60 seconds"
      },
      {
        name: "Jumping Jacks",
        description: "A bodyweight exercise that targets the whole body.",
        targetMuscles: ["Legs", "Core", "Cardiovascular System"],
        reps: "20-30"
      },
      {
        name: "Bear Crawls",
        description: "A bodyweight exercise that targets the shoulders, chest, and core.",
        targetMuscles: ["Shoulders", "Chest", "Core"],
        reps: "10-20 meters"
      }
    ],
    teenagers: [
      {
        name: "Bench Press",
        description: "A weightlifting exercise that targets the chest, shoulders, and triceps.",
        targetMuscles: ["Chest", "Shoulders", "Triceps"],
        reps: "8-12"
      },
      {
        name: "Deadlifts",
        description: "A weightlifting exercise that targets the lower back, hamstrings, and glutes.",
        targetMuscles: ["Lower Back", "Hamstrings", "Glutes"],
        reps: "6-10"
      },
      {
        name: "Pull-Ups",
        description: "A bodyweight exercise that targets the back, biceps, and shoulders.",
        targetMuscles: ["Back", "Biceps", "Shoulders"],
        reps: "5-10"
      },
      {
        name: "Dumbbell Shoulder Press",
        description: "A weightlifting exercise that targets the shoulders and triceps.",
        targetMuscles: ["Shoulders", "Triceps"],
        reps: "10-12"
      },
      {
        name: "Incline Bench Press",
        description: "A weightlifting exercise that targets the upper chest and shoulders.",
        targetMuscles: ["Upper Chest", "Shoulders"],
        reps: "8-12"
      }
    ],
    adults: [
      {
        name: "Overhead Press",
        description: "A weightlifting exercise that targets the shoulders and triceps.",
        targetMuscles: ["Shoulders", "Triceps"],
        reps: "8-12"
      },
      {
        name: "Pull-Ups",
        description: "A bodyweight exercise that targets the back, biceps, and shoulders.",
        targetMuscles: ["Back", "Biceps", "Shoulders"],
        reps: "5-10"
      },
      {
        name: "Bicep Curls",
        description: "A weightlifting exercise that targets the biceps.",
        targetMuscles: ["Biceps"],
        reps: "10-15"
      },
      {
        name: "Tricep Extensions",
        description: "A weightlifting exercise that targets the triceps.",
        targetMuscles: ["Triceps"],
        reps: "10-15"
      },
      {
        name: "Lateral Raises",
        description: "A weightlifting exercise that targets the shoulders.",
        targetMuscles: ["Shoulders"],
        reps: "10-15"
      }
    ],
    seniors: [
      {
        name: "Walking",
        description: "A low-impact exercise that targets the whole body.",
        targetMuscles: ["Legs", "Core", "Cardiovascular System"],
        reps: "20-30 minutes"
      },
      {
        name: "Seated Leg Press",
        description: "A machine exercise that targets the quadriceps and glutes.",
        targetMuscles: ["Quadriceps", "Glutes"],
        reps: "10-15"
      },
      {
        name: "Chair Squats",
        description: "A gentle squat exercise performed with a chair for support.",
        targetMuscles: ["Quadriceps", "Glutes"],
        reps: "10-15"
      },
      {
        name: "Bicep Curls with Resistance Bands",
        description: "An exercise using resistance bands to target the biceps.",
        targetMuscles: ["Biceps"],
        reps: "10-15"
      },
      {
        name: "Ankle Circles",
        description: "A gentle exercise that improves ankle mobility and strength.",
        targetMuscles: ["Ankles"],
        reps: "10-15 per direction"
      }
    ]
  },
  female: {
    children: [
      {
        name: "Jumping Jacks",
        description: "A bodyweight exercise that targets the whole body.",
        targetMuscles: ["Legs", "Core", "Cardiovascular System"],
        reps: "20-30"
      },
      {
        name: "Plank",
        description: "A bodyweight exercise that targets the core muscles.",
        targetMuscles: ["Core", "Shoulders", "Back"],
        reps: "30-60 seconds"
      },
      {
        name: "Mountain Climbers",
        description: "A bodyweight exercise that targets the core and legs.",
        targetMuscles: ["Core", "Legs"],
        reps: "20-30"
      },
      {
        name: "Burpees",
        description: "A full-body exercise that targets multiple muscle groups.",
        targetMuscles: ["Whole Body"],
        reps: "10-15"
      },
      {
        name: "Bear Crawls",
        description: "A bodyweight exercise that targets the shoulders, chest, and core.",
        targetMuscles: ["Shoulders", "Chest", "Core"],
        reps: "10-20 meters"
      }
    ],
    teenagers: [
      {
        name: "Lunges",
        description: "A bodyweight exercise that targets the quadriceps, hamstrings, and glutes.",
        targetMuscles: ["Quadriceps", "Hamstrings", "Glutes"],
        reps: "10-15 per leg"
      },
      {
        name: "Dumbbell Rows",
        description: "A weightlifting exercise that targets the back and biceps.",
        targetMuscles: ["Back", "Biceps"],
        reps: "10-12"
      },
      {
        name: "Bicep Curls",
        description: "A weightlifting exercise that targets the biceps.",
        targetMuscles: ["Biceps"],
        reps: "10-15"
      },
      {
        name: "Dumbbell Chest Press",
        description: "A weightlifting exercise that targets the chest and triceps.",
        targetMuscles: ["Chest", "Triceps"],
        reps: "8-12"
      },
      {
        name: "Dead Bug",
        description: "A core exercise that improves stability and strength.",
        targetMuscles: ["Core"],
        reps: "10-15"
      }
    ],
    adults: [
      {
        name: "Yoga",
        description: "A series of poses that improve flexibility, strength, and relaxation.",
        targetMuscles: ["Whole Body"],
        reps: "30-60 minutes"
      },
      {
        name: "Kettlebell Swings",
        description: "A dynamic exercise that targets the hips, glutes, and core.",
        targetMuscles: ["Hips", "Glutes", "Core"],
        reps: "15-20"
      },
      {
        name: "Tricep Dips",
        description: "A bodyweight exercise that targets the triceps.",
        targetMuscles: ["Triceps"],
        reps: "10-15"
      },
      {
        name: "Goblet Squats",
        description: "A weighted squat exercise that targets the quadriceps and glutes.",
        targetMuscles: ["Quadriceps", "Glutes"],
        reps: "10-15"
      },
      {
        name: "Russian Twists",
        description: "A core exercise that targets the obliques.",
        targetMuscles: ["Obliques"],
        reps: "15-20"
      }
    ],
    seniors: [
      {
        name: "Water Aerobics",
        description: "A low-impact exercise performed in water, targeting the whole body.",
        targetMuscles: ["Whole Body"],
        reps: "30-45 minutes"
      },
      {
        name: "Chair Yoga",
        description: "A gentle form of yoga that can be done while seated.",
        targetMuscles: ["Whole Body"],
        reps: "30-45 minutes"
      },
      {
        name: "Arm Circles",
        description: "A simple exercise that targets the shoulders and arms.",
        targetMuscles: ["Shoulders", "Arms"],
        reps: "15-20"
      },
      {
        name: "Wall Push-Ups",
        description: "A gentle push-up variation performed against a wall.",
        targetMuscles: ["Chest", "Shoulders", "Triceps"],
        reps: "10-15"
      },
      {
        name: "Toe Taps",
        description: "A low-impact exercise that targets the lower body.",
        targetMuscles: ["Legs"],
        reps: "10-15 per leg"
      }
    ]
  }
};

module.exports = exercises;
