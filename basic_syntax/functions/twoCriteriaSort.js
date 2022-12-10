function sort2Criteria(input) {
    const twoCriteriaSort = (cur, next) =>
        cur.length - next.length || cur.localeCompare(next);
    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}

sort2Criteria(['alpha', 'beta', 'gamma'])
sort2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])