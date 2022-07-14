function mohammedSolution(arr, target) {
    const diffMap = new Map();
    for (let i = 0; i < arr.length; i++) {
      const currNum = arr[i];
      const diff = target - currNum;
      if (diffMap.has(currNum)) {
        const otherNumber = diffMap.get(currNum);
        return [otherNumber, currNum];
      }
      diffMap.set(diff, currNum);
    }
    // if no two numbers was found, return empty arr;
    return [];
  }
  