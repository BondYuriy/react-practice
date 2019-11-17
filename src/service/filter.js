const filtered = (filter, notes) =>
  notes.filter(note => note.text.includes(filter));

export default filtered;
