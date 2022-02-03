const setupTags = (projects) => {
  // const tags = ["react", "HTML", "node.js", "react", "HTML Email", "gatsby", 'sanity'];
  const allTags = {};
  let projectCount = 0;

  console.log('***************UTILs****************');

  // make a list of all the tags and count the number of occurrences
  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      if (allTags[tag.title]) {
        allTags[tag.title] = allTags[tag.title] + 1;
      } else {
        allTags[tag.title] = 1;
      }
    });
    projectCount++;
  });
  // tags.forEach((cat) => {
  //   // tag.forEach(cat => {
  //   if (allTags[cat]) {
  //     allTags[cat] = allTags[cat] + 1;
  //     tagsCount++;
  //   } else {
  //     allTags[cat] = 1;
  //     tagsCount++;
  //   }
  //   // });
  // });
  // allTags.push(['all', tagsCount])
  allTags.all = projectCount;
  console.log('All Tags: ');
  console.log(allTags);
  console.log('Tags Count: ');
  console.log(projectCount);

  // make an array of arrays so that index 0 is the tag and index 1 is the count
  // sort the array ASC
  const newTags = Object.entries(allTags).sort((a, b) => {
    //destructure the array so that we sort by the tag only
    const [firstTag] = a;
    const [secondTag] = b;

    return firstTag.localeCompare(secondTag);
  });

  return newTags;
};

export default setupTags;
