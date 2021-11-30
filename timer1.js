const replace = process.argv.slice(2);
for (let i = 0; i < replace.length; i++) {
  if (Number.isInteger(Number(replace[i]))) {
    if (Number(replace[i]) >= 0) {
      setTimeout(()=> process.stdout.write("."),Number(replace[i]) * 1000);    
    } else {
      continue;
    }
  } else {
    continue;
  }
}