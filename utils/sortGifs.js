export default function sortGifs(array, order = "asc") {
  if (!array.length) return [];

  let arr = [];

  if (order === "asc") {
    arr = array
      .map((item) => ({ ...item }))
      .sort((a, b) => {
        if (a.import_datetime < b.import_datetime) {
          return -1;
        } else if (a.import_datetime > b.import_datetime) {
          return 1;
        } else {
          return 0;
        }
      });
  } else if (order === "desc") {
    arr = array
      .map((item) => ({ ...item }))
      .sort((a, b) => {
        if (a.import_datetime > b.import_datetime) {
          return -1;
        } else if (a.import_datetime < b.import_datetime) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  return arr;
}
