import MyComponent from '../../../../slices/TextWithImage';

export default {
  title: 'slices/TextWithImage'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"text_with_image","items":[],"primary":{"text":[{"type":"paragraph","text":"Aute laborum aliquip mollit. Incididunt qui eu ex mollit culpa velit ullamco voluptate aliquip dolore exercitation laboris aute.","spans":[]}],"image":{"dimensions":{"width":1000,"height":1200},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&h=1200&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _WithButton = () => <MyComponent slice={{"variation":"withButton","name":"With Button","slice_type":"text_with_image","items":[],"primary":{"text":[{"type":"paragraph","text":"Nisi est id pariatur aliquip enim sunt enim labore officia aute. Velit proident aliqua et irure ad enim.","spans":[]}],"buttonLink":{"link_type":"Web","url":"https://prismic.io"},"buttonText":"architect compelling technologies","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"}},"id":"_WithButton"}} />
_WithButton.storyName = 'With Button'
