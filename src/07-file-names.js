/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (suffix),
 * where suffix is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let suffix = 1;
  const filenamesArr = [...names];
  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length - i; j++) {
      if (names[j] === filenamesArr[i]) {
        filenamesArr[j] = `${names[j]}(${suffix++})`;
      }
    }
    suffix = 1;
  }
  return filenamesArr;
}

module.exports = renameFiles;
