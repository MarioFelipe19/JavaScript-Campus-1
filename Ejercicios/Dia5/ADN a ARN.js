function transcribir(adn) {
    const complementos = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
    
    return adn.split('').map(nucleotido => complementos[nucleotido]).join('');
}


console.log(transcribir("ACGTGGTCTTAA"));
