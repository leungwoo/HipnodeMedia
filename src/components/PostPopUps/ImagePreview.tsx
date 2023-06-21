import { ChangeEventHandler, useState } from 'react';
import { FileToDataString } from '../../utils/FileToDataString';

function ImagePreview({ closeButton }: any) {
  const [previewImg, setPreviewImg] = useState<string>();

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      setPreviewImg(await FileToDataString(file));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute flex gap-4 items-center w-full mt-28 border max-w-[592px] bg-[#F7F7F7]">
      <input type="file" className="w-1/2" onChange={handleChangeFile} accept="image/*" />
      <img src={previewImg} className={previewImg ? 'h-10 w-10' : ''} />
      <button type="button" className="z-3 absolute right-2" onClick={() => closeButton(false)}>Close</button>
    </div>
  );
}

export default ImagePreview;
