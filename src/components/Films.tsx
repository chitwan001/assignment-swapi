import FilmCard from "./FilmCard.tsx";

export default function Films({films}:{films:string[]}){
    return(
        <div className={'films-parent'}>
            {
                films.map((filmUrl,ind) => (
                    <FilmCard filmUrl={filmUrl} key={'film-'+ind}/>
                ))
            }
        </div>
    )
}