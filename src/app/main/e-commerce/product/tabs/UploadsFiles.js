import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Root = styled('div')(({ theme }) => ({
  '& .productImageFeaturedStar': {
    position: 'absolute',
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0,
  },

  '& .productImageUpload': {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },

  '& .productImageItem': {
    transitionProperty: 'box-shadow',
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    '&:hover': {
      '& .productImageFeaturedStar': {
        opacity: 0.8,
      },
    },
    '&.featured': {
      pointerEvents: 'none',
      boxShadow: theme.shadows[3],
      '& .productImageFeaturedStar': {
        opacity: 1,
      },
      '&:hover .productImageFeaturedStar': {
        opacity: 1,
      },
    },
  },
}));

function ProductImagesTab(props) {
  const methods = useFormContext();
  const { control, watch, setValue, getValues } = methods;
  const [imageFile, setImageFile] = useState("");
  const dispatch = useDispatch();
  const images = watch('images');


  useEffect(() => {
    let formValues = getValues();
    if (formValues.newImage) {
      setImageFile(formValues.newImage);
    }
  }, [getValues]);


  return (
    <div className="flex flex-1 flex-col justify-center p-12" style={{ backgroundColor: "#EEEEEE" }}>
      <Grid>

        <div>
          <div className="flex flex-1 flex-col p-6" style={{ backgroundColor: "#FFFFFF", borderRadius: "30px" }} >
            <FormLabel >
              <Typography style={{ color: "black" }}
                variant="h6"
                gutterBottom
                component="div"

                className="hidden sm:flex text-16 md:text-24 justify-start"
              >
                Multimedia
              </Typography></FormLabel>
            <FormControl className="mt-8 mb-16" fullWidth  >
              <Controller style={{ backgroundColor: "#FFFFFF" }}
                name="new_img"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <label style={{ backgroundColor: "#FFFFFF", border: "3px solid gray" }}
                    htmlFor="button-file"
                    className="productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg"
                  >
                    <input style={{ backgroundColor: "#FFFFFF" }}
                      accept="image/*"
                      className="hidden"
                      id="button-file"
                      type="file"
                      onChange={async (e) => {
                        let url = URL.createObjectURL(e.target.files[0]);
                        console.log(url)
                        setImageFile(url);
                        function readFileAsync() {
                          return new Promise((resolve, reject) => {
                            const file = e.target.files[0];
                            if (!file) {
                              return;
                            }
                            const reader = new FileReader();
                            reader.onload = async () => {
                              let res = await dispatch(postimage({
                                baseString: `${btoa(reader.result)}`,
                                company_id: 'company',
                                fileType: 'material',
                                fileName: file.name
                              }));
                              setValue("images", res?.payload?.data?.key, {
                                shouldValidate: true,
                              });
                            };
                            reader.onerror = reject;
                            reader.readAsBinaryString(file);
                          });
                        }
                        const newImage = await readFileAsync();
                        onChange(newImage.payload.data.key);
                      }}
                    />
                    <Icon fontSize="inherit" style={{ color: "black" }}>
                      cloud_upload
                    </Icon>

                  </label>
                )}
              />
            </FormControl>

            <FormControl className="mt-8 mb-16" fullWidth>
              <Controller style={{ backgroundColor: "#FFFFFF" }}
                name="images"
                control={control}
                render={({ field }) => (
                  <div style={{ backgroundColor: "#FFFFFF", border: "3px solid gray" }}
                    className={clsx(
                      'productImageItem flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg'
                    )}>
                    <img className="max-w-none w-auto h-full" {...field} src={imageFile} />
                  </div>
                )}
              />
            </FormControl>
          </div>
        </div>

      </Grid>
    </div>

  );
}

export default ProductImagesTab;
