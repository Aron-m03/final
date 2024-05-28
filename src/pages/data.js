const exercises = {
    male: {
      children: [
        {
          name: "Push-Ups",
          description: "A bodyweight exercise that targets the chest, shoulders, and triceps.",
          targetMuscles: ["Chest", "Shoulders", "Triceps"]
        },
        {
          name: "Squats",
          description: "A bodyweight exercise that targets the quadriceps, hamstrings, and glutes.",
          targetMuscles: ["Quadriceps", "Hamstrings", "Glutes"]
        }
      ],
      teenagers: [
        {
          name: "Bench Press",
          description: "A weightlifting exercise that targets the chest, shoulders, and triceps.",
          targetMuscles: ["Chest", "Shoulders", "Triceps"]
        },
        {
          name: "Deadlifts",
          description: "A weightlifting exercise that targets the lower back, hamstrings, and glutes.",
          targetMuscles: ["Lower Back", "Hamstrings", "Glutes"]
        }
      ],
      adults: [
        {
          name: "Overhead Press",
          description: "A weightlifting exercise that targets the shoulders and triceps.",
          targetMuscles: ["Shoulders", "Triceps"]
        },
        {
          name: "Pull-Ups",
          description: "A bodyweight exercise that targets the back, biceps, and shoulders.",
          targetMuscles: ["Back", "Biceps", "Shoulders"]
        }
      ],
      seniors: [
        {
          name: "Walking",
          description: "A low-impact exercise that targets the whole body.",
          targetMuscles: ["Legs", "Core", "Cardiovascular System"]
        },
        {
          name: "Seated Leg Press",
          description: "A machine exercise that targets the quadriceps and glutes.",
          targetMuscles: ["Quadriceps", "Glutes"]
        }
      ]
    },
    female: {
      children: [
        {
          name: "Jumping Jacks",
          description: "A bodyweight exercise that targets the whole body.",
          targetMuscles: ["Legs", "Core", "Cardiovascular System"]
        },
        {
          name: "Plank",
          description: "A bodyweight exercise that targets the core muscles.",
          targetMuscles: ["Core", "Shoulders", "Back"]
        }
      ],
      teenagers: [
        {
          name: "Lunges",
          description: "A bodyweight exercise that targets the quadriceps, hamstrings, and glutes.",
          targetMuscles: ["Quadriceps", "Hamstrings", "Glutes"]
        },
        {
          name: "Dumbbell Rows",
          description: "A weightlifting exercise that targets the back and biceps.",
          targetMuscles: ["Back", "Biceps"]
        }
      ],
      adults: [
        {
          name: "Yoga",
          description: "A series of poses that improve flexibility, strength, and relaxation.",
          targetMuscles: ["Whole Body"]
        },
        {
          name: "Kettlebell Swings",
          description: "A dynamic exercise that targets the hips, glutes, and core.",
          targetMuscles: ["Hips", "Glutes", "Core"]
        }
      ],
      seniors: [
        {
          name: "Water Aerobics",
          description: "A low-impact exercise performed in water, targeting the whole body.",
          targetMuscles: ["Whole Body"]
        },
        {
          name: "Chair Yoga",
          description: "A gentle form of yoga that can be done while seated.",
          targetMuscles: ["Whole Body"]
        }
      ]
    }
  };
  
  module.exports = exercises;
  