import Title from "./Title"
import Products from "./Products"

const HomePage = () => {

    
    return (
        <div>
            <Title name="Online Shop" />
            <div className="products">
                <Products />
            </div>
        </div>
    )
}

export default HomePage