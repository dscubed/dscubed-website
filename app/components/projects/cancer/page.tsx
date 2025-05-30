'use client'
import Navbar from '@/app/components/Navbar'
import Section from '@/app/components/Section'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/app/components/Footer'

export default function ProjectTemplate() {
  return (
    <>
        <style jsx global>{`
            @font-face {
            font-family: "Akira Expanded";
            src: url("/fonts/Akira Expanded Demo.otf") format("opentype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
            }
        `}</style>

        <Navbar />
        
        <Section className="mb-24">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-16">
                <div className="space-y-6 my-auto">
                    <h1 className="text-4xl font-black uppercase leading-tight" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>Lung Cancer<br /> Classification</h1>
                    <h2 className="text-xl text-theme" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>AI-based classification of lung cancer types from chest CT scans</h2>
                    <p className="leading-relaxed text-lg">Our project explores advanced deep learning techniques for lung cancer detection using medical CT scans. We focus on classifying the three main subtypes of non-small cell lung cancer—adenocarcinoma, squamous cell carcinoma, and large-cell carcinoma—by comparing the performance of Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs). Utilizing both baseline and pre-trained models, including VGG-16 and a hybrid ViT, we preprocess and augment data to enhance model accuracy. Our work highlights the strengths of each approach in medical image analysis, aiming to improve diagnostic precision and support clinical decision-making through cutting-edge AI technology.</p>

                    <Link 
                        href="https://www.kaggle.com/datasets/mohamedhanyyy/chest-ctscan-images" 
                        target="_blank"
                        className="inline-block font-black uppercase text-xl bg-foreground text-background-secondary px-8 py-3 rounded-full"
                        style={{ fontFamily: "'Akira Expanded', sans-serif" }}
                    >
                        Dataset
                    </Link>
                </div>

                <Image width={512} height={512} alt="xray image" src="/projects/xray.png" className="w-full aspect-[4/3] object-cover rounded-2xl my-auto" />
            </div>
        </Section>

        <Section className="bg-background py-12 my-24">
            <div 
                className="flex justify-around gap-8 lg:flex-col text-theme text-3xl uppercase underline"
                style={{ fontFamily: "'Akira Expanded', sans-serif" }}
            >
                <a href="#report" className="cursor-pointer">Report</a>
                <a href="#results" className="cursor-pointer">Results</a>
                <a href="#discussion" className="cursor-pointer">Discussion</a>
            </div>
        </Section>

        <Section id="report" className="mt-24">
            <div className="max-w-screen-md mx-auto space-y-8 [&_*]:leading-relaxed [&_*]:text-lg">
                <h2 className="font-extrabold !text-4xl" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>Report</h2>
                <p className="">Lung cancer is the leading cause of cancer-related deaths worldwide, with non-small cell lung cancer (NSCLC) making up the vast majority of cases. Accurate identification of subtypes—such as adenocarcinoma, squamous cell carcinoma, and large-cell carcinoma—is crucial for determining appropriate treatment paths. Our project explored how deep learning can assist in this process by automating subtype classification using CT scan images.</p>
                
                <h3 className="!text-xl text-theme font-bold">Methodology Overview</h3>
                <p><strong>Dataset:</strong> We used 1,000 CT scan images labeled across four categories—normal, adenocarcinoma, squamous cell carcinoma, and large-cell carcinoma—split into training, validation, and test sets.</p>
                <p><strong>Preprocessing:</strong> Images were resized, normalized, and equalized. Augmentation techniques like flipping and rotation were used on select models to enhance generalization.</p>
                <div>
                    <span><strong>Model Architecture:</strong> Four main deep learning models were tested:</span>
                    <ul className="list-disc [&>*]:ml-6">
                        <li><strong>Baseline CNN:</strong> A simple convolutional model trained from scratch.</li>
                        <li><strong>Pretrained VGG-16 CNN:</strong> Leveraged transfer learning with and without augmentation.</li>
                        <li><strong>Pretrained ViT:</strong> A Vision Transformer model evaluated across different preprocessing setups.</li>
                        <li><strong>Hybrid ViT:</strong> Combined CNN-based feature extraction with transformer-based attention layers.</li>
                    </ul>
                </div>
                <p><strong>Evaluation:</strong> Models were assessed using overall accuracy and class-wise recall, particularly focusing on the ability to distinguish between lung cancer subtypes.</p>
                <p>This structured, method-driven approach allowed us to directly compare convolutional neural networks with transformer-based architectures in the context of lung cancer classification, highlighting both their strengths and limitations.</p>
            </div>
        </Section>

        <hr className="border-0 border-b-2 border-border" />

        <Section id="results">
            <div className="max-w-screen-md w-full mx-auto space-y-8 [&_*]:leading-relaxed [&_*]:text-lg">
                <h2 className="font-extrabold !text-4xl" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>Results</h2>
                <p className="">Our lung cancer classification project evaluated multiple deep learning models on a dataset of 1,000 labelled CT scans categorized into four classes: normal, adenocarcinoma, large-cell carcinoma, and squamous cell carcinoma. The dataset was split into training, validation, and test sets to ensure rigorous evaluation.</p>
                
                <h3 className="!text-xl text-theme font-bold">Convolutional Neural Networks (CNN)</h3>
                <p><strong>Baseline CNN:</strong> Achieved a test accuracy of <strong>45.4%</strong>, reflecting the challenges of capturing complex features with a shallow architecture.</p>
                <p><strong>Pretrained CNN:</strong>(VGG-16 with augmentation): Improved significantly to <strong>88.5%</strong> accuracy, demonstrating the effectiveness of transfer learning combined with data augmentation techniques.</p>
               
                <h3 className="!text-xl text-theme font-bold">Recall by Class for Hybrid ViT</h3>
                <div className="max-w-full overflow-x-auto rounded-2xl p-2 border-2 border-border">
                    <table className="w-full min-w-max text-left">
                        <thead>
                            <tr>
                                <th className="bg-background rounded-l-lg p-4">Class</th>
                                <th className="bg-background p-4">Original Images</th>
                                <th className="bg-background p-4">Augmented Images</th>
                                <th className="bg-background rounded-r-lg p-4">Augmented + Equalized Images</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="rounded-l-lg p-4">Large-cell carcinoma</td>
                                <td className="p-4">37.8%</td>
                                <td className="p-4">16.7%</td>
                                <td className="rounded-r-lg p-4">5.6%</td>
                            </tr>
                            <tr>
                                <td className="bg-background/40 rounded-l-lg p-4">Adenocarcinoma</td>
                                <td className="bg-background/40 p-4">79.2%</td>
                                <td className="bg-background/40 p-4">36.6%</td>
                                <td className="bg-background/40 rounded-r-lg p-4">95.8%</td>
                            </tr>
                            <tr>
                                <td className="rounded-l-lg p-4">Normal</td>
                                <td className="p-4">100%</td>
                                <td className="p-4">100%</td>
                                <td className="rounded-r-lg p-4">96.3%</td>
                            </tr>
                            <tr>
                                <td className="bg-background/40 rounded-l-lg p-4">Squamous cell carcinoma</td>
                                <td className="bg-background/40 p-4">74.5%</td>
                                <td className="bg-background/40 p-4">23.5%</td>
                                <td className="bg-background/40 rounded-r-lg p-4">0%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="!text-xl text-theme font-bold">Key Insights</h3>
                <ul className="list-disc [&>*]:ml-6">
                    <li>CNN models, especially pretrained VGG-16, outperformed Vision Transformers due to better feature extraction on smaller datasets.</li>
                    <li>Data augmentation improved CNN accuracy but negatively impacted ViT and Hybrid ViT models, suggesting a need for more robust training approaches for transformers.</li>
                    <li>Hybrid ViT showed excellent recall for the normal and adenocarcinoma classes but struggled with squamous cell carcinoma, especially on augmented data.</li>
                    <li>Balancing false positives and false negatives remains critical in lung cancer diagnosis to avoid misclassification of healthy patients and ensure accurate detection.</li>
                </ul>
            </div>
        </Section>

        <hr className="border-0 border-b-2 border-border" />

        <Section id="discussion">
            <div className="max-w-screen-md mx-auto space-y-8 [&_*]:leading-relaxed [&_*]:text-lg">
                <h2 className="font-extrabold !text-4xl" style={{ fontFamily: "'Akira Expanded', sans-serif" }}>Discussion</h2>
                <p className="">The results demonstrate that pretrained Convolutional Neural Networks (CNNs), particularly the VGG-16 model, significantly outperform Vision Transformer (ViT) models in lung cancer classification on this dataset. CNNs’ ability to efficiently extract spatial features from medical images, especially with limited data, likely contributes to their superior performance. However, the decreased accuracy of ViT and Hybrid ViT models with data augmentation suggests transformers may require larger datasets or specialized training to generalize effectively.</p>
                <p className="">The Hybrid ViT model showed promising recall for normal and adenocarcinoma classes but struggled with squamous cell carcinoma, highlighting areas for improvement in model robustness. Additionally, the variation in recall across preprocessing techniques emphasizes the importance of data quality and augmentation strategies. Future work should focus on optimizing transformer architectures and leveraging domain-specific augmentations to boost diagnostic accuracy.</p>
                <p className="">In conclusion, pretrained CNNs remain highly effective for lung cancer classification tasks with current dataset sizes, while Vision Transformers offer potential that requires further exploration. Balancing sensitivity and specificity across tumor types is critical for clinical applications, and transfer learning combined with tailored preprocessing presents a practical pathway for improving AI-based diagnostic tools. Continued research into hybrid models and data strategies will be key to advancing lung cancer detection using deep learning.</p>
                
                <Link 
                    href="/projects" 
                    className="inline-block font-black uppercase text-xl bg-foreground text-background-secondary px-8 py-3 rounded-full"
                    style={{ fontFamily: "'Akira Expanded', sans-serif" }}
                >
                    Back
                </Link>
            </div>
        </Section>

        <Footer />
    </>
  )
}
