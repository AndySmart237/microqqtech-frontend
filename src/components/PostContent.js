
import { YouTubeEmbed } from 'react-social-media-embed';
import ImageAPI from './ImageAPI';


const PostContent = ({ contenu }) => {
    
    return (
        <>
            {contenu ?
                <>
                    {contenu.map((block, index) => {
                        switch (block.type.toLowerCase()) {
                            case 'paragraphe':
                                return (
                                    <div key={index} dangerouslySetInnerHTML={{ __html: block.value }}></div>
                                );
                            case 'deux_colonnes':
                                return (
                                    <div className='row'>
                                        {block.value.left_column.map((content, k) => (
                                            <div className='col-md-6' key={k} dangerouslySetInnerHTML={{ __html: content.value }}></div>
                                        ))}
                                        {block.value.right_column.map((content, k) => (
                                            <div className='col-md-6' key={k} dangerouslySetInnerHTML={{ __html: content.value }}></div>
                                        ))}
                                    </div>
                                );
                            case 'image':
                                return (
                                    <div className='w-50'>
                                        <ImageAPI key={index} id={block.value} />
                                    </div>
                                );
                            case 'lien_pour_contenu_externe':
                                return (
                                    <div style={{ display: 'flex', justifyContent: 'left' }}>
                                        <YouTubeEmbed url={block.value} width={600} height={300} />
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </>
                :
                <></>
            }
        </>
    );
};

export default PostContent;