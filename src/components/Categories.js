function Categories(props){
    const { categories } = props;
    return (
        <div className='categories'>
            {categories.map((category, idx) => {
                return(
                    <div className='category' key={idx}>
                        { category }
                    </div>
                )
            })}
        </div>
    )
}

export default Categories;