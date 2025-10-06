// Age calculation constants
const AGE_CONSTANTS = {
  human: {
    daysPerMonth: 31,
    daysPerYear: 365
  },
  cat: {
    daysPerMonth: 8,
    daysPerYear: 91
  },
  dog: {
    small: {
      daysPerMonth: 8,
      daysPerYear: 91
    },
    medium: {
      daysPerMonth: 6,
      daysPerYear: 73
    },
    large: {
      daysPerMonth: 4,
      daysPerYear: 46
    }
  }
};

/**
 * Calculate pet age based on birth date and animal type
 * @param {Date} birthDate - The pet's birth date
 * @param {string} animalType - 'cat' or 'dog'
 * @param {string} dogSize - 'small', 'medium', or 'large' (only for dogs)
 * @returns {Object} Age in days, months, and years
 */
export const calculatePetAge = (birthDate, animalType, dogSize = null) => {
  const today = new Date();
  const timeDiff = today.getTime() - birthDate.getTime();
  const humanDays = Math.floor(timeDiff / (1000 * 3600 * 24));

  let petConstants;
  
  if (animalType === 'cat') {
    petConstants = AGE_CONSTANTS.cat;
  } else if (animalType === 'dog') {
    if (!dogSize) {
      throw new Error('Dog size is required for dog calculations');
    }
    petConstants = AGE_CONSTANTS.dog[dogSize];
  } else {
    throw new Error('Invalid animal type. Must be "cat" or "dog"');
  }

  // Calculate pet age
  const petDays = humanDays; // Same as human days
  const petMonths = Math.floor(humanDays / petConstants.daysPerMonth);
  const petYears = Math.floor(humanDays / petConstants.daysPerYear);

  return {
    days: petDays,
    months: petMonths,
    years: petYears,
    humanDays: humanDays
  };
};

/**
 * Format date for display
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Get animal emoji based on type and size
 * @param {string} animalType - 'cat' or 'dog'
 * @param {string} dogSize - 'small', 'medium', or 'large'
 * @returns {string} Emoji for the animal
 */
export const getAnimalEmoji = (animalType, dogSize = null) => {
  if (animalType === 'cat') {
    return '🐱';
  } else if (animalType === 'dog') {
    switch (dogSize) {
      case 'small':
        return '🐶';
      case 'medium':
        return '🐕';
      case 'large':
        return '🐕‍🦺';
      default:
        return '🐕';
    }
  }
  return '🐾';
};

/**
 * Get animal display name
 * @param {string} animalType - 'cat' or 'dog'
 * @param {string} dogSize - 'small', 'medium', or 'large'
 * @returns {string} Display name for the animal
 */
export const getAnimalDisplayName = (animalType, dogSize = null) => {
  if (animalType === 'cat') {
    return 'Cat';
  } else if (animalType === 'dog') {
    const sizeCapitalized = dogSize ? dogSize.charAt(0).toUpperCase() + dogSize.slice(1) : '';
    return `${sizeCapitalized} Dog`;
  }
  return 'Pet';
};

