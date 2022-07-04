
import { ProductReview } from '../../components/ProductReview';
import { useProductContext } from '../../Context/products/product.context'
import { useUserContext } from '../../Context/user/user.context';
import './style.css'

export const StoragePage = () => {

    const { productState } = useProductContext();
    const { state } = useUserContext();

    return <div className="storage">
        <div className="container">
            <div className="storage-container">
                {
                    productState.products.filter(product => product.belongTo === state.id).map(item => (
                        <ProductReview data={item} />
                    ))
                }
            </div>

        </div>
    </div>
}