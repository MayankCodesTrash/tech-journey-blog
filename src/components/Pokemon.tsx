import React from 'react';
import {Pokemon as PokemonType} from '@/lib/pokeapi';

interface PokemonProps {
  pokemon: PokemonType;
}

const Pokemon: React.FC<PokemonProps> = (props) => {
  const {pokemon} = props;

  return (
    <div
      className="m-1 flex min-w-[150px] flex-col items-center rounded-[1.25rem] border border-base-300/70 bg-base-100/90 p-3 shadow-sm"
      style={{ backgroundColor: pokemon.backgroundColor }}
    >
      <img
        title={pokemon.name}
        height={96}
        width={96}
        src={pokemon.sprite}
        className="duration-300 hover:animate-hop"
        alt={pokemon.name}
      />
      <div className="mt-2 flex flex-col items-center">
        <div className="capitalize font-semibold text-base-content">{pokemon.name}</div>
        <div className="mt-1 flex items-center justify-between gap-1">
          {pokemon.types.map((t) => (
            <img key={t.name} src={t.typeBadgeUrl} alt="type" className="p-1" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
