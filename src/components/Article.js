import React from "react";
function Article({title,date='January 1, 1970',preview ,minutes}){
    function emojis(minutes){
        const interval=minutes < 30 ? 5 : 10;
        const emoji = minutes <30 ? "☕️": "🍱";
        let emojis = "";
        for(let i=0;i < minutes;i += interval){//if minutes is 7,0isless than 0 ,increment by adding interval 0+5
            //then print 1coffee,,,repeate loop i=5 ,is 5 less 7minutes ,yes,print another coffee ,then add interval 5+5=10
            //i=10, is 10<7mins ,no,loop break
            emojis += emoji
        }
        return emojis
    }
    emojis(minutes)
    return(
        <article>
            <h3>{title}</h3>
            <small>
                {date}
                {emojis(minutes)}
                {minutes}mins read

            </small>
           
            <p>{preview}</p>

        </article>
    )
}
export default Article