let shownAlert = false;

rulesArr.forEach(obj => {
  if (!shownAlert) {
    for (const key in obj) {
      if (obj[key] === '') {
        toast('please fill all the fields');
        shownAlert = true;
        return;
      }
    }
  }
});