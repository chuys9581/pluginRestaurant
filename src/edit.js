import { Button, Modal, Placeholder, SelectControl } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { withSelect } from '@wordpress/data';

const Edit = ( { attributes, setAttributes, categories } ) => {
    const [ isOpen, setOpen ] = useState( false );
    const images = attributes.images || [];
	const text = attributes.text || '';
    const stars = attributes.stars || 0;

    const openModal = () => setOpen( true );
    const closeModal = () => setOpen( false );

    const onSelectImages = ( newImages ) => {
		setAttributes( { images: newImages } );
	};

	const onChangeText = ( newText ) => {
        setAttributes( { text: newText } );
    };

	useEffect(() => {
		setAttributes({ starImage: `/wp-content/uploads/${stars}.png` });
	}, [stars]);;

    const onChangeStars = (newStars) => {
        setAttributes({ stars: parseInt(newStars) });
    };

    // Actualiza el atributo 'categories' cuando cambia la prop 'categories'
    useEffect(() => {
        setAttributes({ categories });
    }, [categories]);

    return (
		<>
			<Placeholder
				icon="format-gallery"
			>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ onSelectImages }
						allowedTypes={ [ 'image' ] }
						multiple
						gallery
						value={ images.map( img => img.id ) }
						render={ ( { open } ) => (
							<Button onClick={ open }>
								Agregar imágenes
							</Button>
						) }
					/>
				</MediaUploadCheck>
				<div className='container-all'>
					<div className='starsAndCat'>
                        <div className='categories'>
						{categories.includes('Las Vegas') ? (
                         <a href="https://restaurantstoeatin.com/category/las-vegas/"style={{ textDecoration: 'none' }}>Las Vegas</a>
                         ) : (
                         <p>{categories}</p>
                         )}
                        </div>
                        <div className='stars'>
                            <SelectControl
                                label="Estrellas"
                                value={stars}
                                options={[
                                    { label: '0 .jpg', value: 0 },
                                    { label: '1 .jpg', value: 1 },
                                    { label: '2 .jpg', value: 2 },
                                    { label: '3 .jpg', value: 3 },
                                ]}
                                onChange={onChangeStars}
                            />
                        </div>
					</div>
					<div className='container-text'>
				<RichText
                    tagName="p"
                    value={ text }
                    onChange={ onChangeText }
                    placeholder="Añade tu texto aquí..."
                />
					</div>
				<div className="my-gallery-block">
               {images.slice(0, 1).map((img, index) => (
                <div className={`image-large`} key={img.id}>
                   <img src={img.url} alt={img.alt} onClick={openModal} />
                </div>
               ))}
               <div className='small-images-container'>
               {images.slice(1, 3).map((img, index) => (
                <div className={`image-small`} key={img.id}>
                   <img src={img.url} alt={img.alt} onClick={openModal} />
                </div>
               ))}
               </div>
			   </div>
                </div>
			</Placeholder>
			{ isOpen && (
				<Modal title="Galería personalizada" onRequestClose={ closeModal }>
					<div className="my-gallery-modal">
						{ images.map( img => (
							<img key={ img.id } src={ img.url } alt={ img.alt } />
						) ) }
					</div>
				</Modal>
			) }
		</>
	);
};

export default withSelect( ( select ) => {
    const { getEntityRecord } = select( 'core' );
    const postType = select( 'core/editor' ).getCurrentPostType();
    const postId = select( 'core/editor' ).getCurrentPostId();
    const post = getEntityRecord( 'postType', postType, postId );

    if ( ! post || ! post.categories ) {
        return {
            categories: '',
        };
    }

    const categoryIds = post.categories;
    const categoryEntities = categoryIds.map( id => getEntityRecord( 'taxonomy', 'category', id ) );

    // Filtramos las categorías que aún no se han cargado.
    const loadedCategories = categoryEntities.filter(Boolean);

    return {
        categories: loadedCategories.map((cat) => cat.name).join(', '),
    };
} )( Edit );
