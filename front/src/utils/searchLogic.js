export const searchCardByBodyText = (data, filter)=>{
    return data.filter(el=>el.body.includes(filter));
}