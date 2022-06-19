function fibonacci
(long, sequence = [0, 1]) {
    return sequence.length < long
      ? fibonacci(
          long,
          sequence.concat(sequence.at(-1) + sequence.at(-2))
        )
      : sequence;
  }
  
  console.log(fibonacci(1000));

function fibonaccipares
(long, sequence = [0, 2]) {
    return sequence.length < long
      ? fibonaccipares(
          long,
          sequence.concat(sequence.at(-1) + sequence.at(-2))
        )
      : sequence;
  }
  
  console.log(fibonaccipares(1000));

  function fibonaccimpares
  (long, sequence = [0, 3]) {
      return sequence.length < long
        ? fibonaccimpares(
            long,
            sequence.concat(sequence.at(-1) + sequence.at(-2))
          )
        : sequence;
    }
    
    console.log(fibonaccimpares(1000));