function Categories(props){
    const { categories } = props;

    return (
        <div className='categories'>
            {categories.map(category => {
                return(
                    <div className='category'>
                        <small>{ category }</small>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories;