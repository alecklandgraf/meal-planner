export function parseGoogleSheetResponse(data) {
  try {
    return data.feed.entry.reduce((acc, entry) => {
      acc[entry['gsx$meal'].$t] = entry;
      return acc;
    }, {});
  } catch (e) {
    console.error(e);
    return data;
  }
}

export function pickMeals(numberOfDays = 5) {
  return [];
}
